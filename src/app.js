var vm = new Vue({
    el: '#vm',
    data: {
        ip: '',
        result: {
            location: {
                lng: '',
                lat: ''
            },
            formatted_address: '',
            addressComponent: {
                adcode: '',
            },
            sematic_description: '',
            citycode: '',
            business: ''
        }
    },
    created: () => {
        $.ajax({
            url:'https://api.prprpr.me/location/',
            method: 'GET'
        }).done((msg) => {
            vm.result = msg.result
        })
    },
    methods: {
        query: () => {
              $.ajax({
                  url:'https://api.prprpr.me/location/?ip='+vm.ip,
                  method: 'GET'
              }).done((msg) => {
                  if ('error' in msg.result) {
                      console.log('ip error')
                  } else {
                      console.log(msg)
                      vm.result = msg.result
                  }
              })
        }
    }
})
