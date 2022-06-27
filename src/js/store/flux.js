const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            characters: [],
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            id: 0 //estado id
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadCharacter: () => {
                fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        character: data.results
                    }));
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            getCharacters: () => {
                const url = "https://thronesapi.com/api/v2/Characters/";

                fetch(url)
                    .then((resp) => resp.json())
                    .then((result) => {
                        setStore({
                            characters: result
                        });
                    });
            },
            setID: (id) => { //funcion que actualiza el id clickeado en las cards para toda la app
                setStore({
                    id: id
                })
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;