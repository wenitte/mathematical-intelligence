# 

Source: https://proofwiki.org/wiki/Barber_Paradox



Paradox
There exists a community, one of whose members is a barber.
This barber operated under an unusual rule: his task was to shave every man in the community who did not shave himself, and only those men.
Who shaves the barber?
If he does not shave himself, then he must shave himself.
But if he shaves himself, he must not shave himself.


Analysis 1
This is an application of Russell's Paradox.
Let $\mathbb U$ be the set of all the men of the community.
Thus $\mathbb U$ is considered to be the universe.
Let $S: \mathbb U \to \set {T, F}$ be the propositional function:

$\forall x \in \mathbb U: \map S x \iff x \text { is shaved by $x$}$
Let $b \in \mathbb U$ be the barber.
Let $B: \mathbb U \to \set {T, F}$ be the propositional function:

$\forall x \in \mathbb U: \map B x \iff x \text { is shaved by $b$}$

The initial premises can be coded:

$(1): \quad \forall x \in \mathbb U: \paren {\neg \map S x} \iff \map B x$
$(2): \quad \map B b \iff \map S b$
Hence:

$\map S b \iff \map B b \iff \paren {\neg \map S b}$
and so from Biconditional is Transitive:

$\map S b \iff \paren {\neg \map S b}$

So from either case there derives a contradiction.
Thus the initial premises are contradictory and cannot both hold.
$\blacksquare$


Analysis 2
Let $\map M x$ be defined as:

$x$ is a man in the community.
Let $\map S {x, y}$ be defined as:

$x$ shaves $y$.
Let $b$ be the barber.
Suppose $\map M b$.
Suppose that:

$\forall x, y: \paren {\map S {x, y} \implies \map M x, \map M y}$

Suppose to the contrary that:

$\forall x: \paren {\map M x \implies \paren {\map S {b, x} \iff \neg \map S {x, x} } }$
For $x = b$ we obtain the contradiction:

$\map S {b, b} \iff \neg \map S {b, b}$
Therefore, it must be false that:

$\forall x: \paren {\map M x \implies \paren {\map S {b, x} \iff \neg \map S {x, x} } }$


Resolution
This paradox has been demonstrated to be an antinomy, and can be resolved by several means, for example:


Resolution 1
Let $b$ be defined so that $b \notin \mathbb U$.
That is, suppose $b$ is not one of the men of the community.
This could be the case by, for example:

$(1): \quad$ The barber is a woman
$(2): \quad$ The barber is a boy too young to shave.
Then as $b \notin \mathbb U$, it is not necessarily the case that:

$\paren {\neg \map S b} \implies \map B b$
Thus $b$ is allowed not to be shaved, by himself or anyone else.
$\blacksquare$


Resolution 2
Let the only condition above be relaxed, and rewrite it as:

his task was to shave every man in the community who did not shave himself.
The initial premises would be coded:

$(1): \quad \forall x \in \mathbb U: \paren {\neg \map S x} \implies \map B x$
$(2): \quad \map B b \iff \map S b$
Thus it is not the case that:

$\map B x \implies \paren {\neg \map S x}$
and so the barber is allowed to shave at least one man who does shave himself, the barber himself necessarily being one such.
$\blacksquare$


Resolution 3
Let the every condition above be relaxed, and rewrite it as:

his task was that he may shave only men in the community who did not shave themselves.
The initial premises can be coded:

$(1): \quad \forall x \in \mathbb U: \map B x \implies \paren {\neg \map S x}$
$(2): \quad \map B b \iff \map S b$
Thus it is not the case that:

$\paren {\neg \map S x} \implies \map B x$
However, from $\map B b \iff \map S b$ this then means that $\neg \map B b$.
So at least one person in the community is not shaven by $b$ at all, the barber himself necessarily being one such.
This of course does not preclude the possibility that some other person, who is not the barber, may also shave people.
These may or may not include the barber, who may retain his beard.
$\blacksquare$


Historical Note
Bertrand Russell himself used the Barber Paradox as an illustration of his paradox, claiming it was invented by an unnamed acquaintance of his.


Sources
1918: Bertrand Russell: The Philosophy of Logical Atomism: $7.$ The Theory of Types and Symbolism: Classes
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $(2)$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.2$: Elements, my dear Watson: Example $1.2.1$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 8$ Russell's paradox




