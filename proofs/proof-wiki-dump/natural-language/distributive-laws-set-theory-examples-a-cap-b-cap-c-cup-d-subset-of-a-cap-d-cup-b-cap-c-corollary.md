# 

Source: https://proofwiki.org/wiki/Distributive_Laws/Set_Theory/Examples/A_cap_B_cap_(C_cup_D)_subset_of_(A_cap_D)_cup_(B_cap_C)/Corollary



Corollary to $A \cap B \cap \paren {C \cup D} \subseteq \paren {A \cap D} \cup \paren {B \cap C}$
Let:

$P = A \cap B \cap \paren {C \cup D}$
$Q = \paren {A \cap D} \cup \paren {B \cap C}$
Then:

$P = Q$
if and only if:

both $B \cap C \subseteq A$ and $A \cap D \subseteq B$


Proof
Sufficient Condition
Let $P = Q$.














\(\ds B \cap C\)

\(\subseteq\)







\(\ds \paren {A \cap D} \cup \paren {B \cap C}\)





Set is Subset of Union














\(\ds \)

\(=\)







\(\ds Q\)




















\(\ds \)

\(=\)







\(\ds P\)





by hypothesis














\(\ds \)

\(=\)







\(\ds A \cap B \cap \paren {C \cup D}\)





by hypothesis














\(\ds \)

\(\subseteq\)







\(\ds A\)





Intersection is Subset




and:














\(\ds A \cap D\)

\(\subseteq\)







\(\ds \paren {A \cap D} \cup \paren {B \cap C}\)





Set is Subset of Union














\(\ds \)

\(=\)







\(\ds Q\)




















\(\ds \)

\(=\)







\(\ds P\)





by hypothesis














\(\ds \)

\(=\)







\(\ds A \cap B \cap \paren {C \cup D}\)





by hypothesis














\(\ds \)

\(\subseteq\)







\(\ds B\)





Intersection is Subset



Thus we have both:

$B \cap C \subseteq A$
and

$A \cap D \subseteq B$
$\Box$


Necessary Condition
Let $B \cap C \subseteq A$ and $A \cap D \subseteq B$.

We have:














\(\ds B \cap C\)

\(\subseteq\)







\(\ds A\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds B \cap C\)

\(=\)







\(\ds A \cap B \cap C\)





Intersection with Subset is Subset‎



and:














\(\ds A \cap D\)

\(\subseteq\)







\(\ds B\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds A \cap D\)

\(=\)







\(\ds A \cap B \cap D\)





Intersection with Subset is Subset‎



and so:














\(\ds \paren {A \cap D} \cup \paren {B \cap C}\)

\(=\)







\(\ds \paren {A \cap B \cap C} \cup \paren {A \cap B \cap D}\)




















\(\ds \)

\(=\)







\(\ds A \cap B \cap \paren {C \cup D}\)





Intersection Distributes over Union



and so $P = Q$ as required.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Sets and Logic: Exercise $11$




