# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Number_of_Derangements_on_Finite_Set



Theorem
The number of derangements $D_n$ on a finite set $S$ of cardinality $n$ is:














\(\ds D_n\)

\(=\)







\(\ds n! \paren {1 - \dfrac 1 {1!} + \dfrac 1 {2!} - \dfrac 1 {3!} + \cdots + \dfrac {\paren {-1}^n} {n!} }\)




















\(\ds \)

\(=\)







\(\ds !n\)





where $!n$ denotes the subfactorial of $n$





Proof 1
Let $s_i$ be the $i$th element of set $S$.
Begin by defining set $A_m$, which is all of the permutations of $S$ which fixes $S_m$.
Then the number of permutations, $W$, with at least one element fixed, $m$, is:

$\ds W = \size {\bigcup_{m \mathop = 1}^n A_m}$

Applying the Inclusion-Exclusion Principle:














\(\ds W\)

\(=\)







\(\ds \sum_{m_1 \mathop = 1}^n \size {A_{m_1} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{m_1, m_2 : 1 \mathop \le m_1 \mathop < m_2 \mathop \le n} \size {A_{m_1} \cap A_{m_2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{m_1, m_2, m_3 : 1 \mathop \le m_1 \mathop < m_2 \mathop < m_3 \mathop \le n} \size {A_{m_1} \cap A_{m_2} \cap A_{m_3} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \cdots\)









Each value $A_{m_1} \cap \cdots \cap A_{m_p}$ represents the set of permutations which fix $p$ values $m_1, \ldots, m_p$.
Note that the number of permutations which fix $p$ values only depends on $p$, not on the particular values of $m$.

Thus from Cardinality of Set of Subsets there are $\dbinom n p$ terms in each summation. 
So:














\(\ds W\)

\(=\)







\(\ds \binom n 1 \size {A_1}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \binom n 2 \size {A_1 \cap A_2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \binom n 3 \size {A_1 \cap A_2 \cap A_3}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{p - 1} \binom n p \size {A_1 \cap \cdots \cap A_p}\)




















\(\ds \)

\(\)







\(\ds \cdots\)










$\size {A_1 \cap \cdots \cap A_p}$ is the number of permutations fixing $p$ elements in position.
This is equal to the number of permutations which rearrange the remaining $n - p$ elements, which is $\paren {n - p}!$.

Thus we finally get:  

$W = \dbinom n 1 \paren {n - 1}! - \dbinom n 2 \paren {n - 2}! + \dbinom n 3 \paren {n - 3}! - \cdots + \paren {-1}^{p - 1} \dbinom n p \paren {n - p}! \cdots$

That is:

$\ds W = \sum_{p \mathop = 1}^n \paren {-1}^{p - 1} \binom n p \paren {n - p}!$

Noting that $\dbinom n p = \dfrac {n!} {p! \paren {n - p}!}$, this reduces to:

$\ds W = \sum_{p \mathop = 1}^n \paren {-1}^{p - 1} \dfrac {n!} {p!}$
$\blacksquare$


Proof 2
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


Also see
Definition:Subfactorial


Historical Note
This problem was first solved by Nicolaus I Bernoulli.
Later, independently, Euler rediscovered the solution.


Sources
1965: Heinrich Dörrie: 100 Great Problems of Elementary Mathematics (translated by David Antin)
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 78 \alpha$
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The misaddressed letters: $130$




