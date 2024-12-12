# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Well-Ordered_Integral_Domain



Theorem
The following definitions of the concept of Well-Ordered Integral Domain are equivalent:
Let $\struct {D, +, \times \le}$ be an ordered integral domain whose zero is $0_D$.

Definition 1
$\struct {D, +, \times \le}$ is a well-ordered integral domain if and only if the ordering $\le$ is a well-ordering on the set $P$ of (strictly) positive elements of $D$.

Definition 2
$\struct {D, +, \times \le}$ is a well-ordered integral domain if and only if every subset $S$ of the set $P$ of (strictly) positive elements of $D$ has a minimal element:

$\forall S \subseteq D_{\ge 0_D}: \exists x \in S: \forall a \in S: x \le a$
where $D_{\ge 0_D}$ denotes all the elements $d \in D$ such that $\map P d$.


Proof
$(1)$ implies $(2)$
Let $\struct {D, +, \times \le}$ be a well-ordered integral domain by definition 1.
Then by definition the ordering $\le$ is a well-ordering on the set $P$ of (strictly) positive elements of $D$.
Let $S \subseteq P$.
Thus by definition of well-ordering, $S$ has a minimal element.
Thus $\struct {D, +, \times \le}$ is a well-ordered integral domain by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $\struct {D, +, \times \le}$ be a well-ordered integral domain by definition 2.
Then by definition every subset $S$ of the set $P$ of (strictly) positive elements of $D$ has a minimal element:

$\forall S \subseteq D_{\ge 0_D}: \exists x \in S: \forall a \in S: x \le a$
where $D_{\ge 0_D}$ denotes all the elements $d \in D$ such that $\map P d$.
Thus by definition $\le$ is a well-ordering of $P$.
Thus $\struct {D, +, \times \le}$ is a well-ordered integral domain by definition 1.
$\blacksquare$





