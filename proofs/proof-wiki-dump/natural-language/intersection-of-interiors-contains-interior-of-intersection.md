# 

Source: https://proofwiki.org/wiki/Intersection_of_Interiors_contains_Interior_of_Intersection



Theorem
Let $T$ be a topological space.

Let $\mathbb H$ be a set of subsets of $T$.
That is, let $\mathbb H \subseteq \powerset T$ where $\powerset T$ is the power set of $T$.

Then the interior of the intersection of $\mathbb H$ is a subset of the intersection of the interiors of the elements of $\mathbb H$.

$\ds \paren {\bigcap_{H \mathop \in \mathbb H} H}^\circ \subseteq \bigcap_{H \mathop \in \mathbb H} H^\circ$


Proof
In the following, $H^-$ denotes the closure of the set $H$.














\(\ds \paren {\bigcap_{H \mathop \in \mathbb H} H}^\circ\)

\(=\)







\(\ds T \setminus \paren {T \setminus \bigcap_{H \mathop \in \mathbb H} H}^-\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds T \setminus \paren {\paren {\bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H} }^-}\)





De Morgan's Laws: Difference with Intersection




At this point we note that:

$(1): \quad \ds \paren {\bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H} }^- \supseteq \bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H}^-$
from Closure of Union contains Union of Closures.

Then we note that:

$\ds T \setminus \paren {\paren {\bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H} }^-} \subseteq T \setminus \paren {\bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H}^-}$
from $(1)$ and Set Complement inverts Subsets.

Then we continue:














\(\ds T \setminus \paren {\bigcup_{H \mathop \in \mathbb H} \paren {T \setminus H}^-}\)

\(=\)







\(\ds T \setminus \paren {\bigcup_{H \mathop \in \mathbb H} T \setminus H^\circ}\)





Complement of Interior equals Closure of Complement














\(\ds \)

\(=\)







\(\ds T \setminus \paren {T \setminus \paren {\bigcap_{H \mathop \in \mathbb H} H^\circ} }\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \bigcap_{H \mathop \in \mathbb H} H^\circ\)





Relative Complement of Relative Complement



$\blacksquare$


Also see
Interior of Finite Intersection equals Intersection of Interiors
Interior of Intersection may not equal Intersection of Interiors


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




