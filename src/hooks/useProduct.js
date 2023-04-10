import { useMemo } from "react"

export const useColors = ((product, selected)=>{
	const color = useMemo (()=>{
		return product.colors.find((color) => color === selected)
	},[selected])
	return color
})

