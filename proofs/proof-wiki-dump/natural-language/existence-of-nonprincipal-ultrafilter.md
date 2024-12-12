# 

Source: https://proofwiki.org/wiki/Existence_of_Nonprincipal_Ultrafilter

Theorem
Let $S$ be an infinite set.
Then there exists an nonprincipal ultrafilter $U$ on $S$.


Proof
Let $\FF$ be the Fréchet filter on $S$.
By Fréchet Filter is Filter, $\FF$ is a filter on $S$.
Then, by the Ultrafilter Lemma, there exists some ultrafilter $U \supseteq \FF$ on $S$.

Let $a \in S$ be arbitrary.
By Existence of Singleton Set, there exists a singleton $\set a$.
Let $A = S \setminus \set a$.
By the definition of set difference, $a \notin A$.
Then:














\(\ds S \setminus A\)

\(=\)







\(\ds S \setminus \paren {S \setminus \set a}\)





Definition of $A$














\(\ds \)

\(=\)







\(\ds S \cap \set a\)





Set Difference with Set Difference














\(\ds \)

\(=\)







\(\ds \set a\)





Intersection with Subset is Subset, Singleton of Element is Subset



But by Singleton is Finite, $\set a$ is a finite set.
Therefore, $S \setminus A$ is finite as well.
But then, by definition, $A$ is cofinite in $S$.
Thus, by definition of Fréchet filter, $A \in \FF$.
But as $U \supseteq \FF$, $A \in U$ by definition of superset.

Therefore, as $a \in S$ was arbitrary:

For every $a \in S$, there is some $A \in U$ such that $a \notin A$.
Thus, $U$ does not have a cluster point, and is nonprincipal by definition.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Ultrafilter Lemma.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





