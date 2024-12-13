# 

Source: https://proofwiki.org/wiki/Recursive_Function_is_Arithmetically_Definable

Theorem
Let $f: \N^k \to \N$ be a recursive function.
Then there exists a $\Sigma_1$ WFF of $k + 1$ free variables:

$\map \phi {y, x_1, x_2, \dotsc, x_k}$
such that:

$y = \map f {x_1, x_2, \dotsc, x_k} \iff \N \models \map \phi {\sqbrk y, \sqbrk {x_1}, \sqbrk {x_2}, \dotsc, \sqbrk {x_k} }$
where $\sqbrk a$ denotes the unary representation of $a \in \N$.


Proof
By definition of recursive function:

$f$ can be obtained from basic primitive recursive functions using the operations of:
substitution
primitive recursion, and
minimization on a function
a finite number of times.
The existence of $\phi$ follows from:

Basic Primitive Recursive Functions are Arithmetically Definable
Substitution of Arithmetically Definable Functions is Arithmetically Definable
Primitive Recursion on Arithmetically Definable Function is Arithmetically Definable
Minimization of Arithmetically Definable Function is Arithmetically Definable
$\blacksquare$





