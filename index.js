import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const myFlag = process.env.FLAG

app.head("/secret", (req, res) => {
  res
    .status(200)
    .set({ "X-FLAG": myFlag })
    .end()
})

app.get("/secret", async (req, res) => {
  await wait(40000)
  res.send(
    "Sometimes what you see is not all there is. Try changing your perspective and look at things in a way most people wouldn't normally consider."
  )
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
