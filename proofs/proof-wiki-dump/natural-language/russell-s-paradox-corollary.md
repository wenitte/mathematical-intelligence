# 

Source: https://proofwiki.org/wiki/Russell%27s_Paradox/Corollary



Corollary to Russell's Paradox
$\not \exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$

Given a relation $\RR$, there cannot exist an element $x$ that bears $\RR$ to all $y$ which do not bear $\RR$ to itself.


Proof 1
Aiming for a contradiction, suppose there does exist such an $x$.
Let $\RR$ be such that $\map \RR {x, x}$.
Then $\neg \map \RR {x, x}$.
Hence it cannot be the case that $\map \RR {x, x}$.
Now suppose that $\neg \map \RR {x, x}$.
Then by definition of $x$ it follows that $\map \RR {x, x}$.
In both cases a contradiction results.
Hence there can be no such $x$.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose:

$\exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$
By Existential Instantiation:

$\forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$
By Universal Instantiation:

$\map \RR {x, x} \iff \neg \map \RR {x, x} $
But this contradicts Biconditional of Proposition and its Negation.
We thus conclude:

$\not \exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 8$ Russell's paradox




