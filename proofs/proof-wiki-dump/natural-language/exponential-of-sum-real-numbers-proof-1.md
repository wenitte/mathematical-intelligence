# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers/Proof_1

Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$


Proof
This proof assumes the definition of $\exp$ as:

$\exp x = y \iff \ln y = x$
where:

$\ln y = \ds \int_1^y \dfrac 1 t \rd t$

Let $X = \exp x$ and $Y = \exp y$.
From Sum of Logarithms, we have:

$\ln X Y = \ln X + \ln Y = x + y$
From the Exponential of Natural Logarithm:

$\map \exp {\ln x} = x$
Thus:

$\map \exp {x + y} = \map \exp {\ln X Y} = X Y = \paren {\exp x} \paren {\exp y}$
$\blacksquare$

Alternatively, this may be proved directly by investigating:

$\map D {\map \exp {x + y} / \exp x}$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.5 \ (1) \ \text {(i)}$




