# 

Source: https://proofwiki.org/wiki/Identity_Morphism_is_Terminal_Object_in_Slice_Category

Theorem
Let $\mathbf C$ be a metacategory, and let $C \in \mathbf C_0$ be an object of $\mathbf C$.
Let $\operatorname{id}_C: C \to C$ be the identity morphism for $C$.

Then $\operatorname{id}_C$ is a terminal object in the slice category $\mathbf C \mathop / C$.


Proof
Let $f: B \to C$ be an object of $\mathbf C \mathop / C$.
Then there is a morphism $a: f \to \operatorname{id}_C$ if and only if:

$f = \operatorname{id}_C \circ a = a$
Thus, $f$ itself defines the unique morphism $f \to \operatorname{id}_C$ in $\mathbf C \mathop / C$.
We therefore have the following commutative diagram in $\mathbf C$:
$\quad\quad \begin{xy}
<-3em,0em>*+{B} = "X",
<3em,0em>*+{C} = "X2",
<0em,-4em>*+{C} = "C",
"X";"X2" **@{--} ?>*@{>} ?*!/_1em/{f},
"X";"C" **@{-} ?>*@{>} ?<>(.3)*!/^1em/{f},
"X2";"C" **@{-} ?>*@{>} ?<>(.3)*!/_1em/{\operatorname{id}_C},
\end{xy}$
Hence the result, by definition of terminal object.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.2$: Example $2.11$: $6$




