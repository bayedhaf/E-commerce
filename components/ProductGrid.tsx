'use client'
import React, { useEffect, useState } from 'react'
import HomeTabbar from './HomeTabbar'
import { productTypes } from '@/constants'
import { client } from '@/sanity/lib/client'
import ProductCard from './ProductCard'
import { Product } from '@/sanity.types'

export default function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState(productTypes[0]?.title || "")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const query = `*[_type == "product" && variant == $variant] | order(name asc)`
    const params = { variant: selectedTab.toLocaleLowerCase() }

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await client.fetch<Product[]>(query, params)
        setProducts(response)
      } catch (error) {
        console.error("Product fetching error", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [selectedTab])

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>
          <span>Product is loading...</span>
        </div>
      ) : (
        <>
          {products.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p>No products</p>
          )}
        </>
      )}
    </div>
  )
}
