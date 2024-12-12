# 

Source: https://proofwiki.org/wiki/Extended_Euclidean_Algorithm

Algorithm
The extended Euclidean algorithm is a method for:

finding the greatest common divisor (GCD) $d$ of two strictly positive integers $m$ and $n$
computing two integers $a$ and $b$ such that $a m + b n = d$.

Let $m, n \in \Z_{>0}$.


$\mathbf 1:$ Initialise.
Set $a' \gets b \gets 1, a \gets b\,' \gets 0, c \gets m, d \gets n$.
$\mathbf 2:$ Divide.
Let $q$ and $r$ be the quotient and remainder respectively of $ c / d$.
(Thus we have $c = q d + r$ such that $0 \le r < d$.)
$\mathbf 3:$ Remainder zero?
If $r = 0$, the algorithm terminates.
(Thus we have $a m + b n = d$ as required.)
$\mathbf 4:$ Recycle.
Set $c \gets d, d \gets r, t \gets a', a' \gets a, a \gets t - q a, t \gets b\,', b\,' \gets b, b \gets t - q b$, then go to Step $\mathbf 2$.
$\blacksquare$


Proof
Thus the GCD of $m$ and $n$ is the value of the variable $d$ at the end of the algorithm.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction




