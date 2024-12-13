# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Well-Ordered_Integral_Domain



Theorem
Let $\struct {D, +, \times, \le}$ be a well-ordered integral domain whose zero is $0_D$.
Let the unity of $D$ be $1_D$.

Let $S \subseteq D$ be such that:

$1_D \in S$
$a \in S \implies a + 1_D \in S$

Then:

$D_{> 0_D} \subseteq S$
where $D_{> 0_D}$ denotes all the elements $d \in D$ such that $\map P d$.
That is, $D_{> 0_D}$ is the set of all (strictly) positive elements of $D$.


Proof
Let $\overline S$ be the set of all elements of $D_{> 0_D}$ that are not in $S$:

$\overline S = D_{> 0_D} \setminus S$
Aiming for a contradiction, suppose $\overline S$ is not empty.
Then as $D$ is well-ordered, it follows that $\overline S$ has a minimal element, which we will call $m$.
Then $m - 1 \notin \overline S$.
But $1 < m$ as $1 \in S$, and from One Succeeds Zero in Well-Ordered Integral Domain, $1$ is the minimal positive element of $D$.
So $0 < m - 1$ and so $m - 1$ is strictly positive.
Because $m - 1 \notin \overline S$, it follows that $m - 1 \in S$.
By construction of $S$ it follows that $m \in S$.
So $m \in S$ and $m \in \overline S$, that is:

$m \notin S$
From this contradiction we deduced that there can therefore be no such $m$.
Hence:

$D_{\ge 0_D} \setminus S = \O$.
From Set Difference with Superset is Empty Set it follows that $D_{\ge 0_D} \subseteq S$.
$\blacksquare$


Also see
This proof is (trivially) the same as the Principle of Mathematical Induction, but whereas this one takes as the basis the concept of the well-ordered integral domain, the latter proof uses the naturally ordered semigroup.
Both approaches are tantamount to the same thing, as they both lead (ultimately) to the uniqueness of the set of natural numbers $\N$ and also the set of integers $\Z$.


Work In ProgressIn particular: All these various definitions of the natural numbers and integers need to be gathered together and rationalised. This should be straightforward but requires care in order to achieve just that precise level of abstraction in which this can be formulated.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 8$. Well-Order: Theorem $13$




