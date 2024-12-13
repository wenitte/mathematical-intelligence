# 

Source: https://proofwiki.org/wiki/Interior_of_Finite_Intersection_equals_Intersection_of_Interiors

Theorem
Let $T$ be a topological space.
Let $n \in \N$.
Let:

$\forall i \in \set {1, 2, \dotsc, n}: H_i \subseteq T$

Then:

$\ds \paren {\bigcap_{i \mathop = 1}^n H_i}^\circ = \bigcap_{i \mathop = 1}^n H_i^\circ$
where $H_i^\circ$ denotes the interior of $H_i$.


Proof
In the following, $H_i^-$ denotes the closure of the set $H_i$.














\(\ds \paren {\bigcap_{i \mathop = 1}^n H_i}^\circ\)

\(=\)







\(\ds T \setminus \paren {T \setminus \bigcap_{i \mathop = 1}^n H_i}^-\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds T \setminus \paren {\paren {\bigcup_{i \mathop = 1}^n \paren {T \setminus H_i} }^-}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds T \setminus \paren {\bigcup_{i \mathop = 1}^n \paren {T \setminus H_i}^-}\)





Closure of Finite Union equals Union of Closures














\(\ds \)

\(=\)







\(\ds T \setminus \paren {\bigcup_{i \mathop = 1}^n T \setminus H_i^\circ}\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds T \setminus \paren {T \setminus \paren {\bigcap_{i \mathop = 1}^n H_i^\circ} }\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \bigcap_{i \mathop = 1}^n H_i^\circ\)





Relative Complement of Relative Complement



$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




