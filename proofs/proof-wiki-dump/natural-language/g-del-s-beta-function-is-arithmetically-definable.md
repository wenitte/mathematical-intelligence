# 

Source: https://proofwiki.org/wiki/G%C3%B6del%27s_Beta_Function_is_Arithmetically_Definable


This article needs to be linked to other articles.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let Gödel's $\beta$ function $\beta: \N^3 \to \N$ be defined as:

$\map \beta {x, y, z} = \map \rem {x, 1 + \paren {z + 1} \times y}$
Then there exists a $\Sigma_1$ WFF of $4$ free variables:

$\map \phi {r, x, y, z}$
such that:

$r = \map \beta {x, y, z} \iff \N \models \map \phi {\sqbrk r, \sqbrk x, \sqbrk y, \sqbrk z}$
where $\sqbrk a$ denotes the unary representation of $a \in \N$.


Proof
Follows from:

Basic Primitive Recursive Functions are Arithmetically Definable
Addition is Arithmetically Definable
Multiplication is Arithmetically Definable
Remainder is Arithmetically Definable
Substitution of Arithmetically Definable Functions is Arithmetically Definable
$\blacksquare$





