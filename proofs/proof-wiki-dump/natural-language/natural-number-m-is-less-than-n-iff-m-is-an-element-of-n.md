# 

Source: https://proofwiki.org/wiki/Natural_Number_m_is_Less_than_n_iff_m_is_an_Element_of_n



Theorem
Let $\omega$ be the set of natural numbers defined as the von Neumann construction.
Let $m, n \in \omega$.
Then:

$m < n \iff m \in n$

That is, every natural number is the set of all smaller natural numbers.


Proof
By definition of the ordering on von Neumann construction:

$m \le n \iff m \subseteq n$


Necessary Condition
Let $m \in n$.
Then from Natural Number is Transitive Set:

$m \subseteq n$
But if $m = n$, we would have:

$m \in m$
which contradicts Natural Number is Ordinary Set.
So we have:

$m \le n$ and $m \ne n$
that is:

$m < n$
$\Box$


Sufficient Condition
Let $m < n$.
Then by Natural Number m is Less than n implies n is not Greater than Successor of n:

$m^+ \le n$
But we have $m \in m^+$ by construction.
Hence:

$m \in n$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $3$: The Natural Numbers: $\S 5$ Applications to natural numbers: Theorem $5.6$




