# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_implies_Hausdorff%27s_Maximal_Principle/Proof_3

Theorem
Let the Axiom of Choice be accepted.
Then Hausdorff's Maximal Principle holds.


Proof
Let $\struct {\CC, \subseteq}$ be the set of all chains in $P$ ordered by inclusion. 
By Set of Chains is Closed under Chain Unions under Subset Relation, $\CC$ is a chain complete ordered set.
Now define $f: \CC \to \CC$ as follows:

If $C$ is a maximal chain then $\map f C = C$.
Otherwise $f$ chooses arbitrarily, using the axiom of choice, some chain $D$ which strictly contains $C$.
By construction, $\map f C \supseteq C$.
By the above, $\CC$ is chain complete.
Therefore the Bourbaki-Witt Fixed Point Theorem applies and $f$ has a fixed point $\map F M = M$.
But by the above construction, the only fixed points of $f$ are maximal chains.
Therefore $M$ is a maximal chain.
$\blacksquare$


Source of Name
This entry was named for Felix Hausdorff.





