# 

Source: https://proofwiki.org/wiki/Derivative_of_Natural_Logarithm_Function/Proof_4

Theorem
Let $\ln x$ be the natural logarithm function.
Then:

$\map {\dfrac \d {\d x} } {\ln x} = \dfrac 1 x$


Proof
This proof assumes the definition of the natural logarithm as the limit of a sequence of real functions.
Let $\sequence {f_n}$ be the sequence of mappings $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$
Fix $x_0 \in \R_{>0}$.
Pick $k \in \N : x_0 \in J := \closedint {\dfrac 1 k} k$.
From definition of bounded interval, $J$ is bounded.
From Derivative of Nth Root and Combination Theorem for Sequences:

$\forall n \in \N : \forall x \in J : D_x \map {f_n} x = \dfrac {\sqrt [n] x} x$
In particular:

$\forall n: f_n$ is differentiable on $J$
From Defining Sequence of Natural Logarithm is Convergent, $\sequence {\map {f_n} {x_0} }$ is convergent.


Lemma
Let $\sequence {f_n}_n$ be the sequence of real functions $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$
Let $k \in \N$.
Let $J = \closedint {\dfrac 1 k} k$.

Then the sequence of derivatives $\sequence { {f_n}'}_n$ converges uniformly to some real function $g: J \to \R$.
$\Box$

From the lemma, $\sequence { {f_n}'}$ converges uniformly to $\dfrac 1 x$ on $J$.
From Derivative of Uniformly Convergent Sequence of Differentiable Functions, $\map {f'} x = \dfrac 1 x$ on $J$
In particular:

$\map {f'} {x_0} = \dfrac 1 {x_0}$
Hence the result.
$\blacksquare$





