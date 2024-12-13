# 

Source: https://proofwiki.org/wiki/Monotonic_Sequence_Characterization_of_Left_Limit_of_Function/Corollary

Corollary
Let $\hointl a b$ be a real interval. 
Let $x \in \hointl a b$. 
Let $f : \hointl a b \to \R$ be a real function.

Then $f$ is left-continuous at $x$ if and only if:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to \map f x$


Proof
From the definition of left-continuity, $f$ is left-continuous at $x$ if and only if:

$\ds \lim_{y \mathop \to x^-} \map f y = \map f x$
By Monotonic Sequence Characterization of Left Limit of Function, this is equivalent to:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$, with $x_n < x$ for each $n$, that converge to $x$ we have:
$\map f {x_n} \to L$
$\blacksquare$





