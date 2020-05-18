export function reportWebVitals(metric) {
    if (metric.label === 'web-vital') {
      console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
    }
  }

// export function reportWebVitals(metric) {
//     console.log(metric)
//   }
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp