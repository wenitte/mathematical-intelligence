# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Number_of_Derangements_on_Finite_Set/Proof_2

Theorem
The number of derangements $D_n$ on a finite set $S$ of cardinality $n$ is:














\(\ds D_n\)

\(=\)







\(\ds n! \paren {1 - \dfrac 1 {1!} + \dfrac 1 {2!} - \dfrac 1 {3!} + \cdots + \dfrac {\paren {-1}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds !n\)





where $!n$ denotes the subfactorial of $n$





Proof
A derangement is a permutation that fixes no elements.
So, to compute the total number of derangements, we compute the number of permutations that fix elements, that is leave elements in the same place.
Let $\pi$ be a permutation of $S$.
Let $x, y \in S$.
Let $i$ be a position in a given permutation of set $S$, where $1 \le i \le n$.
Let $\map {P_i} \pi$ be the property that $\map \pi x = y$ at position $i$.
Let $\map N {P_i, \dots, P_j}$ be the number of permutations where $\map {P_i} \pi, \dots, \map {P_j} \pi$ hold.

If we consider all the permutations of a set where the property $P_i$ holds, we have fixed a single element of the set.
So there are $\paren {n - 1}!$ such possible permutations.
Furthermore, we could have chosen $i$ as any element in the set so there are $\dbinom n 1$ terms to choose from.
So $\map N {P_i} = \paren {n - 1}!$ and there are $\dbinom n 1$ terms.
Similarly, $\map N {P_i, P_j} = \paren {n - 2}!$ and there are $\dbinom n 2$ terms.

So now we can compute the total number of derangements:














\(\ds D_n\)

\(=\)







\(\ds n! - \dbinom n 1 \paren {n - 1}! + \dbinom n 2 \paren {n - 2}! - \ldots + \paren {-1}^n \dbinom n n \paren {n - n}!\)




















\(\ds \)

\(=\)







\(\ds n! - \frac {n!} {1! \paren {n - 1}!} \paren {n - 1}! + \frac {n!} {2! \paren {n - 2}!} \paren {n - 2}! - \cdots + \paren {-1}^n \frac {n!} {n! \paren {n - n}!} \paren {n - n}!\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n! \paren {1 - \frac 1 {1!} + \frac 1 {2!} - \frac 1 {3!} + \cdots + \paren {-1}^n \frac 1 {n!} }\)









$\blacksquare$


Historical Note
This problem was first solved by Nicolaus I Bernoulli.
Later, independently, Euler rediscovered the solution.





