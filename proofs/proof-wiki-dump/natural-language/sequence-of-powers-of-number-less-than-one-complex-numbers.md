# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Complex_Numbers



Theorem
Let $z \in \C$.
Let $\sequence {z_n}$ be the sequence in $\C$ defined as $z_n = z^n$.

Then:

$\size z < 1$ if and only if $\sequence {z_n}$ is a null sequence.


Proof
By the definition of convergence:

$\ds \lim_{n \mathop \to \infty} z_n = 0 \iff \lim_{n \mathop \to \infty} \size {z_n} = 0$
By Modulus of Product:

$\forall n \in \N: \size {z_n} = \size {z^n} = \size z^n$
So:

$\ds \lim_{n \mathop \to \infty} \size {z_n} = 0 \iff \lim_{n \mathop \to \infty} \size z^n = 0$
Since $\size z \in \R_{\ge 0}$, by Sequence of Powers of Real Number less than One:

$\ds \lim_{n \mathop \to \infty} \size z^n = 0 \iff \size z < 1$
The result follows.
$\blacksquare$


Also known as
This result and Sequence of Powers of Reciprocals is Null Sequence are sometimes referred to as the basic null sequences.


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Example $\text {(iv)}$




