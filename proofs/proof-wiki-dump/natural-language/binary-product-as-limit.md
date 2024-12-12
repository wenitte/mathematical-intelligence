# 

Source: https://proofwiki.org/wiki/Binary_Product_as_Limit

Theorem
Let $\mathbf C$ be a metacategory.
Let $C_1, C_2$ be objects of $\mathbf C$.
Let their binary product $C_1 \times C_2$ exist in $\mathbf C$.

Then $C_1 \times C_2$ is the limit of the diagram $D: 2 \to \mathbf C$ defined by:

$D_0 := C_1, D_1 := C_2$
where $2$ is the discrete category with two objects $0, 1$.


Proof
Since there are no non-identity morphisms, a cone to $D$ is simply a pair:

$\begin{xy}\xymatrix@+1em@L+3px{
 C_1
&
 C
  \ar[l]_*+{f_1}
  \ar[r]^*+{f_2}
&
 C_2
}\end{xy}$
of morphisms with common domain $C$.
By the UMP of the binary product $C_1 \times C_2$, for such a cone to $D$ there is a unique $u: C \to C_1 \times C_2$ making:

$\begin{xy}\xymatrix@L+3px@+1em{
&
 C
  \ar[dl]_*+{f_1}
  \ar@{-->}[d]^*{u}
  \ar[dr]^*+{f_2}

\\
 C_1
&
 C_1 \times C_2
  \ar[l]_*+{p_1}
  \ar[r]^*+{p_2}
&
 C_2
}\end{xy}$
a commutative diagram.
The conditions $p_1 \circ u = f_1$ and $p_2 \circ u = f_2$ precisely mean that $u: C \to C_1 \times C_2$ is a morphism of cones.

Thus for every cone $\struct{C, f_1, f_2}$ to $D$, there is a unique morphism of cones to the cone $\struct{C_1 \times C_2, p_1, p_2}$.
That is, $\struct{C_1 \times C_2, p_1, p_2}$ is a terminal object in $\map {\mathbf{Cone}} D$, the category of cones to $D$.
Hence the result, by definition of limit.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.4$: Example $5.17$




