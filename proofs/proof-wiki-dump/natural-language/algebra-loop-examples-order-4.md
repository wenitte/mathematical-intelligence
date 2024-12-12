# 

Source: https://proofwiki.org/wiki/Algebra_Loop/Examples/Order_4

Example of Algebra Loop
The following are the Cayley tables of the operations $\circ$ on $S = \set {e, a, b, c}$ such that $\struct {S, \circ}$ is an algebra loop whose identity is $e$:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & b & c & e
\\
b & b & c & e & a
\\
c & c & e & a & b
\\
\end{array}
\qquad
\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e & c & b
\\
b & b & c & e & a
\\
c & c & b & a & e
\\
\end{array}
\qquad
\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & c & e & b
\\
b & b & e & c & a
\\
c & c & b & a & e
\\
\end{array}
\qquad
\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e & c & b
\\
b & b & c & a & e
\\
c & c & b & e & a
\\
\end{array}$

The first two of these are the Cayley tables of:

the cyclic group of order $4$
the Klein $4$-group
while the $3$rd and $4$th are also isomorphic to the cyclic group of order $4$.


Proof
The initial specification allows us to populate the first few elements of the Cayley table:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a &   &   &  
\\
b & b &   &   &  
\\
c & c &   &   &  
\\
\end{array}$

Let us consider $a \circ a$.
This cannot be $a$ as there is already an $a$ in the row and column.


Let $a \circ a = e$

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e &   &  
\\
b & b &   &   &  
\\
c & c &   &   &  
\\
\end{array}$
This immediately forces:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e & c & b
\\
b & b & c &   &  
\\
c & c & b &   &  
\\
\end{array}$
There are two ways to complete this.
Either $b \circ b = e$ which gives us the Klein $4$-group:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e & c & b
\\
b & b & c & e & a
\\
c & c & b & a & e
\\
\end{array}$
or $b \circ b = a$, which gives us:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e & c & b
\\
b & b & c & a & e
\\
c & c & b & e & a
\\
\end{array}$


Let $a \circ a = b$

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & b &   &  
\\
b & b &   &   &  
\\
c & c &   &   &  
\\
\end{array}$
We note that $a \circ b = e$ will not work, because that forces $a \circ c = c$ which is not allowed because there is already a $c$ in the $c$ column.
Hence we have $a \circ b = c$, which forces the completion of the cyclic group of order $4$:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & b & c & e
\\
b & b & c & e & a
\\
c & c & e & a & b
\\
\end{array}$


Let $a \circ a = c$

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & c &   &  
\\
b & b &   &   &  
\\
c & c &   &   &  
\\
\end{array}$
This forces the completion of the following:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & c & e & b
\\
b & b & e & c & a
\\
c & c & b & a & e
\\
\end{array}$

We then note that we can rearrange the order of the rows and columns of the remaining two tables to demonstrate that they are the cyclic group of order $4$:

Let us take:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & c & e & b
\\
b & b & e & c & a
\\
c & c & b & a & e
\\
\end{array}$
Rearranging the order of the rows and columns as follows:

$\begin{array}{r|rrr}
\circ & e & b & c & a \\
\hline
e & e & b & c & a
\\
b & b & c & a & e
\\
c & c & a & e & b
\\
a & a & e & b & c
\\
\end{array}$
from which the cyclic group of order $4$ is verified by inspection.

Similarly:

$\begin{array}{r|rrr}
\circ & e & a & b & c\\
\hline
e & e & a & b & c
\\
a & a & e & c & b
\\
b & b & c & a & e
\\
c & c & b & e & a
\\
\end{array}$
Rearranging the order of the rows and columns as follows:

$\begin{array}{r|rrr}
\circ & e & b & a & c \\
\hline
e & e & b & a & c
\\
b & b & a & c & e
\\
a & a & c & e & b
\\
c & c & e & b & a
\\
\end{array}$
from which the cyclic group of order $4$ is also verified by inspection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.8 \ \text {(b)}$




