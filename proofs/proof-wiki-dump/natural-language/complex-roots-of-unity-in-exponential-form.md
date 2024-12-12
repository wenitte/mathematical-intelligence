# 

Source: https://proofwiki.org/wiki/Complex_Roots_of_Unity_in_Exponential_Form



Theorem
Let $n \in \Z$ be an integer such that $n > 0$.
Let $z \in \C$ be a complex number such that $z^n = 1$.
Then:

$U_n = \set {e^{2 i k \pi / n}: k \in \N_n}$
where $U_n$ is the set of $n$th roots of unity.
That is:

$z \in \set {1, e^{2 i \pi / n}, e^{4 i \pi / n}, \ldots, e^{2 \paren {n - 1} i \pi / n} }$

Thus for every integer $n$, the number of $n$th roots of unity is $n$.

Setting $\omega := e^{2 i \pi / n}$, $U_n$ can then be written as:

$U_n = \set {1, \omega, \omega^2, \ldots, \omega^{n - 1} }$


Proof
Let $z \in \set {e^{2 i k \pi / n}: k \in \N_n}$.
Then:

$z^n \in \set {e^{2 i k \pi}: k \in \N_n}$
Hence $z^n = 1$.

Now suppose $z^n = 1$. We determine the possible values of $z$ using Roots of Complex Number.
Let $z = r e^{i \theta}$.
Then $\cmod {z^n} = 1 \implies \cmod z = 1$.
Similarly, we have $n \theta = 0 \bmod 2 \pi$.
So $\theta = \dfrac {2 k \pi} n$ for $k \in \Z$.
Hence the result.
$\blacksquare$


This article contains statements that are justified by handwavery.In particular: This is a bit slapdash - anyone care to improve it?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page. 
Also see
Condition for Complex Root of Unity to be Primitive


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: The $n$th Roots of Unity




