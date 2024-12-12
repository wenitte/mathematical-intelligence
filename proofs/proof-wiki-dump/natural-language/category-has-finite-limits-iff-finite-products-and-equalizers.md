# 

Source: https://proofwiki.org/wiki/Category_has_Finite_Limits_iff_Finite_Products_and_Equalizers



Theorem
Let $\mathbf C$ be a metacategory.

Then:

$\mathbf C$ has all finite limits
if and only if:

$\mathbf C$ has all finite products and equalizers.


Proof
Necessary Condition
By definition, finite products are instances of finite limits.
So are equalizers, by Equalizer as Limit.
$\Box$


Sufficient Condition
Let $C: \mathbf J \to \mathbf C$ be a diagram, with $\mathbf J$ finite.
The objective is to construct the limit $D = \varprojlim_j C_j$.
That is:

an object $D$
morphisms $p_j: D \to C_j$
such that:

$C_\alpha p_i = p_j$ for each $\mathbf J$-morphism $\alpha: i \to j$
for each $E$ and $q_j: E \to C_j$ such that $C_\alpha q_i = q_j$ for each $\alpha$, there is a unique $f: E \to D$ such that $q_j = p_j f$ for each $j$

To this end, consider the finite products:

$\ds \prod_{j \mathop \in \operatorname{ob} \mathbf J} C_j$ and $\ds \prod_{\alpha \mathop \in \operatorname{mor} \mathbf J} C_{\operatorname{cod} \alpha}$
of the objects of the diagram and the codomains of its morphisms.
Next, define the morphisms $\pi, \varepsilon: \ds \prod_{j \mathop \in \operatorname{ob} \mathbf J} C_j \to \prod_{\alpha \mathop \in \operatorname{mor} \mathbf J} C_{\operatorname{cod} \alpha}$ by:

$\pi_\alpha = \pr_{C_{\operatorname{cod} \alpha}}$
$\varepsilon_\alpha = C_\alpha \pr_{C_{\operatorname{dom} \alpha}}$
Now let $e: D \to \ds \prod_{j \mathop \in \operatorname{ob} \mathbf J} C_j$ be the equalizer of $\pi$ and $\varepsilon$.
Also, define $p_j: D \to C_j$ by $p_j = \pr_{C_j} e$ for each $j$.

Now, for every $\alpha: i \to j$:














\(\ds C_\alpha p_i\)

\(=\)







\(\ds C_\alpha \pr_{C_j} e\)





Definition of $p_i$














\(\ds \)

\(=\)







\(\ds \varepsilon_\alpha e\)





Definition of $\varepsilon_\alpha$














\(\ds \)

\(=\)







\(\ds \pi_\alpha e\)





$e$ equalizes $\pi$ and $\varepsilon$














\(\ds \)

\(=\)







\(\ds \pr_{C_j} e\)





Definition of $\pi_\alpha$














\(\ds \)

\(=\)







\(\ds p_j\)





Definition of $p_j$




Lastly, suppose that $E$ and $q_j$ have the properties stated.
By definition of the product $\ds \prod_{j \mathop \in \operatorname{ob} \mathbf J} C_j$, there is a morphism:

$\ds q: E \to \prod_{j \mathop \in \operatorname{ob} \mathbf J} C_j$
Now, for every $\alpha: i \to j$:














\(\ds \pi_\alpha q\)

\(=\)







\(\ds \pr_j q\)





Definition of $\pi_\alpha$














\(\ds \)

\(=\)







\(\ds q_j\)





Definition of $q$














\(\ds \)

\(=\)







\(\ds C_\alpha q_i\)





Assumption on the $q_i$














\(\ds \)

\(=\)







\(\ds C_\alpha \pr_i q\)





Definition of $q$














\(\ds \)

\(=\)







\(\ds \varepsilon_\alpha q\)





Definition of $\varepsilon_\alpha$



Hence, since $e$ equalizes $\pi$ and $\varepsilon$, it follows that there exists a unique $f: E \to D$, such that:

$q = ef$
Thus, for each $j$:

$\pr_j q = \pr_j e f$
which, by the definitions of $q_j$ and $p_j$, amounts to:

$q_j = p_j f$

Hence $D$ and the $q_j$ form the desired limit.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous): $\S 5.4$: Proposition $5.21$




