# 

Source: https://proofwiki.org/wiki/Epimorphism_into_Projective_Object_Splits

Theorem
Let $\mathbf C$ be a metacategory.
Let $P \in \mathbf C_0$ be a projective object of $\mathbf C$.
Let $e: E \twoheadrightarrow P$ be an epimorphism.

Then $e$ is a split epimorphism, i.e. it admits a retraction $f: P \to E$.


Proof
Consider the identity morphism $\operatorname{id}_P: P \to P$.
By definition of projective object, we obtain the following commutative diagram:
$\quad\quad \begin{xy}
<0em,0em>*+{P} = "P",
<4em,0em>*+{P} = "P2",
<4em,4em>*+{E} = "E",
"P";"E" **@{-} ?>*@{>} ?*!/_.6em/{f},
"P";"P2" **@{-} ?>*@{>} ?*!/^.6em/{\operatorname{id}_P},
"E";"P2" **@{-} ?>*@2{>} ?<>(.7)*{\vee} ?*!/_.6em/{e},
\end{xy}$
where $f = \bar{\operatorname{id}_P}$.
It follows that $e \circ f = \operatorname{id}_P$, and so $e$ is a split epimorphism.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.1.1$




