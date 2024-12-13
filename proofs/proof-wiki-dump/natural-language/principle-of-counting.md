# 

Source: https://proofwiki.org/wiki/Principle_of_Counting



Theorem
Let $T$ be a set such that $T \sim \N_n$.
Then:

$\forall m \in \N: n \ne m \implies T \nsim \N_m$


Proof
The result follows directly from Equality of Natural Numbers and the fact that set equivalence is transitive.
$\blacksquare$


Motivation
Suppose we have a set of objects which we want to count.
That is, we want to know how many objects there are in our set.
What we are doing is trying to match up our set with one of the sets $\N_n$.

That's what we (effectively) do when we count. We pick a set $\N_n$ and compare it in size to see whether it matches the one we're counting. If it doesn't, we pick another one and try again.
In fact, what we do is test them in order. We give each $n \in \N$ a name, and we learn what order they go in and which name matches which $n$. Then we separate the set we are counting into two subsets: the ones counted and the ones still to be counted. As we move each object one by one from the latter into the former, we recite the name of the element of $n$ which follows the previous one we have just counted.
When there are no more elements in the ones still to be counted subset, the $n$ we have reached is the name of the $\N_n$ which is equivalent to the ones counted subset.


Also see
This is (confusingly) not to be confused with the Fundamental Principle of Counting, otherwise known as the counting principle.


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.4$: Definition $2.4$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.3$




