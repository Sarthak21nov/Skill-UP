import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes'
import React from 'react'


function HomeCard(props) {
  return (
    <div className='z-0'>
        <Box maxWidth="300px" className='shadow-2xl hover:scale-110 transition transform duration-300 m-5 animation-popup'>
            <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={props.image}
                        alt={props.alt}
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: 140,
                            padding: "2px",
                            backgroundColor: "var(--gray-5)",
                        }}
                    />
                </Inset>
                <Text as="p" size="3">
                    <Strong className='text-center'>{props.title}</Strong> 
                    <br/>
                    {props.description}
                </Text>
            </Card>
        </Box>
    </div>
  )
}

export default HomeCard