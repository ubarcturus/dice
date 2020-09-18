import React, {useState} from 'react';
import './App.css';
import logo from './logo.svg';

const MyWidget = (props: {
	text: string;
	update_text: (new_text: string) => void;
}): JSX.Element => {
	console.log(`is now in MyWidget widget renderer: ${props.text}`);
	return (
		<div>
			{props.text}
			<button type="button" onClick={(_event) => props.update_text('Foo')}>
				Fooize
			</button>
		</div>
	);
};

function rollDice(dices: string): number {
	// Math.floor(Math.random() * 11);
	return Number.parseInt(dices, 10);
}

const App = (_props: Record<string, unknown>): JSX.Element => {
	const [hidden, set_hidden] = useState(false);
	const [dice_input, set_dice_input] = useState('');
	const [text, set_text] = useState('default text');

	console.log(`is now in App widget renderer: ${dice_input}`);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<MyWidget
					text={text}
					update_text={(new_text) => set_text(new_text + 'Bar')}
				/>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<input
					type="text"
					name="dice"
					id="dice"
					value={dice_input}
					onChange={(event) => set_dice_input(event.target.value)}
				/>
				<MyWidget
					text={text}
					update_text={(new_text) => set_text(new_text + 'Bar')}
				/>
			</header>

			<div>
				<form action="RollDice" onSubmit={(event) => event.preventDefault()}>
					{hidden ? null : (
						<input
							type="text"
							name="dice"
							id="dice"
							value={dice_input}
							onChange={(event) => set_dice_input(event.target.value)}
						/>
					)}
					<input
						type="button"
						value="Würfeln"
						onClick={() => {
							rollDice(dice_input);
						}}
					/>
				</form>
			</div>
			{hidden ? (
				<button type="button" onClick={() => set_hidden(false)}>
					Show
				</button>
			) : (
				<button type="button" onClick={() => set_hidden(true)}>
					Hide
				</button>
			)}
		</div>
	);
};

export default App;
