# 

Source: https://proofwiki.org/wiki/Every_Ultrafilter_Converges_implies_Every_Filter_has_Limit_Point



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let every ultrafilter on $S$ be convergent.

Then every filter on $S$ has a limit point.


Proof
Let $\FF$ be a  filter on $S$.
By the Ultrafilter Lemma, there exists an ultrafilter $\FF'$ such that $\FF \subseteq \FF'$.
By hypothesis, $\FF'$ converges to some $x \in S$.
This, by Limit Point iff Superfilter Converges, implies that $x$ is a limit point of $\FF$.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Ultrafilter Lemma.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Also see
Equivalence of Definitions of Compact Topological Space




