# 

Source: https://proofwiki.org/wiki/Generators_of_Special_Linear_Group_of_Order_2_over_Integers


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let:

$ S = \begin{pmatrix}
0 & - 1 \\
1 & 0
\end{pmatrix}$
and:

$T = \begin{pmatrix}
1 & 1 \\
0 & 1
\end{pmatrix}$

Then $S$ and $T$ are generators for the special linear group of order $2$ over $\Z$. 


Proof
Let:

$ g = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$
be an element of $\SL {2, \Z}$.
Observe that:

$T^n = \begin{pmatrix}
1 & n \\ 
0 & 1
\end{pmatrix}$
so that:

$T^n g = \begin{pmatrix}
a + nc & b + nd \\
c & d
\end{pmatrix}$
Also note that:

$S^2 = -I$
and:

$S g = \begin{pmatrix}
-c & -d \\
a & b
\end{pmatrix}$
We now describe an algorithm to reduce $g$ to the identity matrix only using multiplication by $S$ and $T$. 
This will show that $g^{-1}$ can be written as a word in $S$ and $T$. 
We can then take the inverse of this expression in $S$ and $T$ and it too will be a word in $S$ and $T$. 
Recall $g = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$. 
If $c = 0$ then, since $\map \det g = 1$, we must have $a d = 1$. 
Thus $a = d = \pm 1$. In this case:

$g = \pm\begin{pmatrix}
1 & b' \\
0 & 1
\end{pmatrix} = \pm T^{b'}$
where $b' = \pm b$. 
Since $S^2 = -I$ we either have $g = T^{b'}$ or $g = S^2 T^{b'}$. 
If $c \ne 0$ we proceed as follows. 
Without loss of generality, we may suppose $\size a \ge \size c$, for if $\size a < \size c$ we could apply $S$ to swap $a$ and $c$. 
By the Division Theorem, we can write $a = c q + r$ where $q, r \in \Z$ and $0 \le r < \size c$. 
Then $T^{-q} g$ has upper left entry $a - q c = r$ which is smaller than $\size c$.
Applying $S$ switches the rows (with a sign change), which then makes our lower left entry $-r$. 
We have applied a combination of $S$ and $T$ to turn $g$ into a matrix where the absolute value of the lower left entry is strictly less than the one we started with. 
If $r = 0$ then we're in our original case, and we know we can multiply by a multiple of $T$ and $S$ to get to the identity matrix. 
Note that this process can have at most $r$ steps, since there are only $r$ natural numbers between $r$ and $0$. 
Thus the process terminates in a finite number of steps.
$\blacksquare$





