# 

Source: https://proofwiki.org/wiki/Identity_Morphism_is_Initial_Object_in_Coslice_Category

Theorem
Let $\mathbf C$ be a metacategory, and let $C \in \mathbf C_0$ be an object of $\mathbf C$.
Let $\operatorname{id}_C: C \to C$ be the identity morphism for $C$.

Then $\operatorname{id}_C$ is an initial object in the coslice category $C / \mathbf C$.


Proof
Let $f: C \to D$ be an object of $C / \mathbf C$.
Then there is a morphism $a: \operatorname{id}_C \to f$ if and only if:

$f = a \circ \operatorname{id}_C = a$
Thus, $f$ itself defines the unique morphism $\operatorname{id}_C \to f$ in $C \mathop / \mathbf C$.
We therefore have the following commutative diagram in $\mathbf C$:
$\quad\quad \begin{xy}
<-3em,0em>*+{C} = "X",
<3em,0em>*+{D} = "X2",
<0em,4em>*+{C} = "C",
"X";"X2" **@{--} ?>*@{>} ?*!/^1em/{f},
"C";"X" **@{-} ?>*@{>} ?*!/^.6em/{\operatorname{id}_C},
"C";"X2" **@{-} ?>*@{>} ?<>(.6)*!/_1em/{f'},
\end{xy}$
Hence the result, by definition of initial object.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.2$: Example $2.11$: $6$




