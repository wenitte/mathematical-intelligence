# 

Source: https://proofwiki.org/wiki/No_Injection_from_Power_Set_to_Set/Lemma

Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.

Then there does not exist a set $B$ such that there is an injection from $B$ into $S$ and a surjection from $B$ onto $\powerset S$.


Proof
Aiming for a contradiction, suppose there exists such a $B$.
Let $i: B \to S$ be an injection.
Let $f: B \to \powerset S$ be a surjection.
Let $i^\gets: \powerset S \to \powerset B$ be the inverse image mapping of $i$.
By Mapping Induced by Inverse of Injection is Surjection, $i^\gets$ is a surjection.
Let $f^\to: \powerset B \to \powerset {\powerset S}$ be the direct image mapping of $f$.
By Direct Image Mapping of Surjection is Surjection, $f^\to$ is a surjection:
We have that $i^\gets: \powerset S \to \powerset B$ and $f^\to: \powerset B \to \powerset {\powerset S}$ are surjective.
By Composite of Surjections is Surjection, their composition $f^\to \circ i^\gets: \powerset S \to \powerset {\powerset S}$ is a surjection by Composite of Surjections is Surjection.
But this violates Cantor's Theorem, contradicting the assumption that such a $B$ exists.
$\blacksquare$





