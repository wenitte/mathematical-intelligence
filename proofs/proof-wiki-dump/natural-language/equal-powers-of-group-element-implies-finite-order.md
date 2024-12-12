# 

Source: https://proofwiki.org/wiki/Equal_Powers_of_Group_Element_implies_Finite_Order



Theorem
Let $\struct {G, \circ}$ be a group.
Let $g \in G$ such that $g^r = g^s$ where $r, s \in \Z: r \ne s$.

Then there exists $m \in \Z_{>0}$ such that:

$(1): \quad g^m = e$
$(2): \quad 0 \le i < j < m \implies g^i \ne g^j$


Proof
Without loss of generality, suppose that $r > s$.
From $g^r = g^s$ it follows from Powers of Group Elements that:

$g^{r - s} = g^r g^{-s} = g^s g^{-s} = e$
Thus there exists $t \in \Z_{>0}$ such that $g^t = e$.
Let $m \in \Z_{>0}$ be the smallest such that $g^m = e$.
Suppose $0 \le i < j < m$ such that $g^i = g^j$.
Then $g^{j - i} = e$ and $0 < j - i < m$.
This contradicts the choice of $m$ as the smallest $m \in \Z_{>0}$ such that $g^m = e$.
Hence the result.
$\blacksquare$


Also see
Definition:Order of Group Element


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.4$: Theorem $3 \ (1)$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts




