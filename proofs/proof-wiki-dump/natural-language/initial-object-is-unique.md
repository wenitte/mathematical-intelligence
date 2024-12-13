# 

Source: https://proofwiki.org/wiki/Initial_Object_is_Unique



Theorem
Let $\mathbf C$ be a metacategory.
Let $0$ and $0'$ be two initial objects of $\mathbf C$.

Then there is a unique isomorphism $u: 0 \to 0'$.
Hence, initial objects are unique up to unique isomorphism.


Proof
Consider the following commutative diagram:
$\quad\quad \begin{xy}
<-4em,0em>*+{0} = "M",
<0em,0em> *+{0'}= "N",
<0em,-4em>*+{0} = "M2",
<4em,-4em>*+{0'}= "N2",
"M";"N"  **@{-} ?>*@{>} ?*!/_.6em/{u},
"M";"M2" **@{-} ?>*@{>} ?*!/^.6em/{\operatorname{id}_0},
"N";"M2" **@{-} ?>*@{>} ?*!/_.6em/{v},
"N";"N2" **@{-} ?>*@{>} ?*!/_1em/{\operatorname{id}_{0'}},
"M2";"N2"**@{-} ?>*@{>} ?*!/^.6em/{u},
\end{xy}$
It commutes as each of the morphisms in it originates from an initial object, and hence is unique.
Thus, $v$ is an inverse to $u$, and so $u$ is an isomorphism.
$\blacksquare$


Also see
Terminal Object is Unique


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.2$: Proposition $2.10$




