import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import data from '../utils/data'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div>
        <div>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card>
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size='small' color='primary'>
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  )
}
