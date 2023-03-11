type Color = "white" | "black" | "gray"

export type Product = {
  id: number
  title: string
  price: number
  color: Color[]
  keyword?: string
}
