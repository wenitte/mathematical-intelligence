# 

Source: https://proofwiki.org/wiki/Equalizer_is_Monomorphism

Theorem
Let $\mathbf C$ be a metacategory.
Let $e: E \to C$ be the equalizer of two morphisms $f, g: C \to D$.

Then $e$ is a monomorphism.


Proof
Suppose that for morphisms $x,y: Z \to E$, it holds that:

$e \circ y = e \circ x$
Putting $z = e \circ x$, the following commutative diagram applies:
$\quad\quad \begin{xy}\xymatrix{
E
\ar[r]^*{e} 
&
C
\ar[r]<2pt>^*{f}
\ar[r]<-2pt>_*{g} 
&
D 
\\
Z
\ar[u]<2pt>^*{x}
\ar[u]<-2pt>_*{y}
\ar[ur]_*{z}
}\end{xy}$

It follows that $f \circ z = g \circ z$.
Since $e$ is an equalizer, there thus exists a unique $u: Z \to E$ with:

$z = e \circ u$

Hence $x = u = y$, and it follows that $e$ is a monomorphism.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 3.3$: Proposition $3.16$




