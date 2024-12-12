# 

Source: https://proofwiki.org/wiki/Barber_Paradox/Resolution_2

Paradox
There exists a community, one of whose members is a barber.
This barber operated under an unusual rule: his task was to shave every man in the community who did not shave himself, and only those men.
Who shaves the barber?
If he does not shave himself, then he must shave himself.
But if he shaves himself, he must not shave himself.


Analysis
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


Resolution
Let the only condition above be relaxed, and rewrite it as:

his task was to shave every man in the community who did not shave himself.
The initial premises would be coded:

$(1): \quad \forall x \in \mathbb U: \paren {\neg \map S x} \implies \map B x$
$(2): \quad \map B b \iff \map S b$
Thus it is not the case that:

$\map B x \implies \paren {\neg \map S x}$
and so the barber is allowed to shave at least one man who does shave himself, the barber himself necessarily being one such.
$\blacksquare$





