# 

Source: https://proofwiki.org/wiki/Characteristic_of_Extending_Operation

Theorem
Let $E$ be an extending operation.
Then there exists a mapping $F$ on the class of all ordinals $\On$ such that:

$\forall \alpha \in \On: F \restriction \alpha^+ = \map E {F \restriction \alpha}$
where:

$F \restriction \alpha$ denotes the restriction of $F$ to $\alpha$
$\alpha^+$ denotes the successor ordinal of $\alpha$.


Proof
Let $M$ be the class which is minimally superinductive under $E$.
Recall the Transfinite Recursion Theorem:




\((1)\)  

$:$  



Zeroth Ordinal:   



\(\ds M_0 = \O \)   







  


\((2)\)  

$:$  



Successor Ordinal:   

  \(\ds \forall \alpha \in \On:\)

\(\ds M_{\alpha^+} = \map E {M_\alpha} \)   







  


\((3)\)  

$:$  



Limit Ordinal:   

  \(\ds \forall \lambda \in K_{II}:\)

\(\ds M_\lambda = \bigcup_{\alpha \mathop < \lambda} M_\alpha \)   







  

where:

for an arbitrary ordinal $\alpha$, $M_\alpha$ denotes the $\alpha$th element of $M$ under the well-ordered class $\struct {M, \subseteq}$
$K_{II}$ denotes the class of all limit ordinals.

We know that $M_0 = 0$, so $M_0$ is a $0$-sequence.
Let $M_\alpha$ be an arbitrary $\alpha$-sequence.
Then from $(2)$ above, $M_{\alpha^+}$ is an $\alpha^+$-sequence.

Let $\lambda$ be a limit ordinal.
Suppose that, for each $\alpha < \lambda$, $M_\alpha$ is an $\alpha$-sequence.
Then by Length of Union of Chain of Ordinal Sequences, $M_\lambda$ is a $\lambda$-sequence.
Hence by the Second Principle of Transfinite Induction:

for every $\alpha \in \On$, $M_\alpha$ is an ordinal sequence of length $\alpha$.

Let $F = \bigcup M$ be the union of $M$.
Then by Length of Union of Chain of Ordinal Sequences again, $F$ is a mapping on $\On$.

Because each $M_\alpha \subseteq F$ and $\Dom {M_\alpha} = \alpha$, it follows that $M_\alpha = F \restriction \alpha$.
Hence from Union of Nest of Ordinal Sequences which is Proper Class:

$\forall \alpha \in \On: F \restriction \alpha^+ = \map E {F \restriction \alpha}$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 5$ Transfinite recursion theorems: Theorem $5.3$




