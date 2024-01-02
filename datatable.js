const onRowEditComplete1 = (e) => {
    let _products2 = [...products2];
    let { newData, index } = e;

    // Ensure that newData.bp is in the correct format ("Y" or "N")
    if (newData.bp === true) {
        newData.bp = "Y";
    } else if (newData.bp === false) {
        newData.bp = "N";
    }

    _products2[index] = newData;

    setProducts2(_products2);
}

const checkEditor1 = (options) => {
    const currentCheckState = options.value === "Y";

    const onCheckboxChange = (e) => {
        const newValue = e.checked ? "Y" : "N";
        options.editorCallback(newValue);
    }

    return (
        <Checkbox
            onChange={onCheckboxChange}
            checked={currentCheckState}
        />
    );
}

const checkTemplate1 = (rowData) => {
    return (
        <Checkbox checked={rowData.bp === "Y"} />
    );
}
/*
------------------------------------------------------------------------
  jsx snippet
------------------------------------------------------------------------
*/
/*
<DataTable value={products2} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll">
    <Column field="bp" header="......." body={checkTemplate1} editor={(options) => checkEditor1(options)} style={{ width: '10%' }}></Column>
    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
</DataTable>
*/
/*
-------------------------------------------------------------------------
json example format
-------------------------------------------------------------------------
*/
/*
{
  "data": [
    {
      "bp": "N"
    },
*/
