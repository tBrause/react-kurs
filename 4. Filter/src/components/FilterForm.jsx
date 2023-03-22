export default function FilterForm({ saleOnly, setSaleOnly }) {
	// const [saleOnly, setSaleOnly] = useState(false);
	return (
		<form className="filter">
			<div>
				<label htmlFor="">
					Sonderangebote
					<input
						type="checkbox"
						onChange={(e) => setSaleOnly(e.target.checked)}
						checked={saleOnly}
					></input>
				</label>
			</div>
		</form>
	);
}
