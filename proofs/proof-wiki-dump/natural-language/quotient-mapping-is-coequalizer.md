# 

Source: https://proofwiki.org/wiki/Quotient_Mapping_is_Coequalizer

Theorem
Let $\mathbf{Set}$ be the category of sets.
Let $S$ be a Set.
Let $\RR \subseteq S \times S$ be an equivalence relation on $S$.
Let $r_1, r_2: \RR \to S$ be the projections corresponding to the inclusion mapping $\RR \hookrightarrow S \times S$.
Let $q: S \to S / \RR$ be the quotient mapping induced by $\RR$.

Then $q$ is a coequalizer of $r_1$ and $r_2$ in $\mathbf{Set}$.


Proof
Let $f: S \to T$ be a mapping as in the following commutative diagram:
$\quad\quad \begin{xy}\xymatrix{
\RR 
\ar[r]<2pt>^*{r_1}
\ar[r]<-2pt>_*{r_2}
& 
S
\ar[r]^*{q}
\ar[rd]_*{f}
&
S / \RR
\ar@{.>}[d]^*{\bar f}
\\
& &
T
}\end{xy}$
This translates to, for $s_1, s_2 \in S$ with $s_1 \RR s_2$:

$\map {f \circ r_1} {s_1, s_2} = \map {f \circ r_2} {s_1, s_2}$
that is:

$\map f {s_1} = \map f {s_2}$

The commutativity of the diagram implies that we must define $\bar f: S / \RR \to T$ by:

$\map {\bar f} {\eqclass {s_1} \RR} = \map f {s_1}$
since $\map q {s_1} = \eqclass {s_1} \RR$.

The above condition precisely states that $\bar f$ is well-defined.
In conclusion, for any $f$ with $f \circ r_1 = f \circ r_2$, there is a unique $\bar f$ making the diagram commute.

That is, $q$ is a coequalizer of $r_1$ and $r_2$.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous): $\S 3.4$: Example $3.20$




