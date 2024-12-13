# 

Source: https://proofwiki.org/wiki/Intersection_of_Applications_of_Down_Mappings_at_Element_equals_Way_Below_Closure_of_Element

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below meet-continuous lattice.
Let $\operatorname {Ids}$ be the set of all ideals in $L$.
Let for all $I \in \operatorname {Ids}$: $m_I: S \to \operatorname {Ids}$ be a mapping:

$\forall x \in S: x \preceq \sup I \implies \map {m_I} x = \set {x \wedge i: i \in I}$
and

$\forall x \in S: x \npreceq \sup I \implies \map {m_I} x = x^\preceq$
where $x^\preceq$ denotes the lower closure of $x$.
Let $x \in S$.

Then

$\ds \bigcap \set {\map {m_I} x: I \in \operatorname {Ids} } = x^\ll$
where $x^\ll$ denotes the way below closure of $x$.


Proof













\(\ds \set {\map {m_I} x: I \in \operatorname {Ids} }\)

\(=\)







\(\ds \set {\map {m_I} x: I \in \operatorname {Ids} \land x \preceq \sup I} \cup \set {\map {m_I} x: I \in \operatorname {Ids} \land x \npreceq \sup I}\)




















\(\ds \)

\(=\)







\(\ds \set {\set {x \wedge i: i \in I}: I \in \operatorname {Ids} \land x \preceq \sup I} \cup \set {x^\preceq: I \in \operatorname {Ids} \land x \npreceq \sup I}\)





Definition of $m_I$














\(\ds \)

\(=\)







\(\ds \set {\paren {x^\preceq} \cap I: I \in \operatorname {Ids} \land x \preceq \sup I} \cup \set {x^\preceq: I \in \operatorname {Ids} \land x \npreceq \sup I}\)





Intersection of Lower Closure of Element with Ideal equals Meet of Element and Ideal



Thus














\(\ds \bigcap \set {\map {m_I} x: I \in \operatorname {Ids} }\)

\(=\)







\(\ds \bigcap \set {\paren {x^\preceq} \cap I: I \in \operatorname {Ids} \land x \preceq \sup I} \cap \bigcap \set {x^\preceq: I \in \operatorname {Ids} \land x \npreceq \sup I}\)




















\(\ds \)

\(=\)







\(\ds \bigcap \set {\paren {x^\preceq} \cap I: I \in \operatorname {Ids} \land x \preceq \sup I} \cap \bigcap \set {x^\preceq}\)




















\(\ds \)

\(=\)







\(\ds \bigcap \set {\paren {x^\preceq} \cap I: I \in \operatorname {Ids} \land x \preceq \sup I} \cap x^\preceq\)





Intersection of Singleton














\(\ds \)

\(=\)







\(\ds \paren {x^\preceq} \cap \bigcap \set {I: I \in \operatorname {Ids} \land x \preceq \sup I} \cap x^\preceq\)





Set Intersection is Self-Distributive














\(\ds \)

\(=\)







\(\ds \paren {x^\preceq} \cap \paren {x^\ll} \cap x^\preceq\)





Intersection of Ideals with Suprema Succeed Element equals Way Below Closure of Element














\(\ds \)

\(=\)







\(\ds x^\ll\)





Intersection with Subset is Subset as $x^\ll \subseteq x^\preceq$ by Way Below implies Preceding



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:43




