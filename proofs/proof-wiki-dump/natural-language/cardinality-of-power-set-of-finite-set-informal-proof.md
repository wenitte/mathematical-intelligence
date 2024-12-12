# 

Source: https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set/Informal_Proof



Theorem
Let $S$ be a set such that:

$\card S = n$
where $\card S$ denotes the cardinality of $S$,

Then:

$\card {\powerset S} = 2^n$
where $\powerset S$ denotes the power set of $S$.


Proof
Given an element $x$ of $S$, each subset of $S$ either includes $x$ or does not include $x$ (this follows directly from the definition of a set), which gives us two possibilities.
The same reasoning holds for any element of $S$.
One can intuitively see that this means that there are $\ds \underbrace {2 \times 2 \times \ldots \times 2}_{\card S} = 2^{\card S}$ total possible combinations of elements of $S$.
This is exactly $\card {\powerset S}$.
$\blacksquare$


Motivation
The formal mathematical backing for the intuitive leap made in this "proof" is non-trivial, so while this it serves as an excellent demonstration of why this result holds true, it does not constitute a fully rigorous proof of this theorem.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The number of selections from $n$ things if any number may be taken
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $6$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 6.8$: Subsets




