# 

Source: https://proofwiki.org/wiki/Dirichlet_Convolution_is_Associative

Theorem
Let $f, g, h$ be arithmetic functions.
Let $*$ denote Dirichlet convolution.

Then:

$\paren {f * g} * h = f * \paren {g * h}$


Proof
We have:














\(\ds \map {\paren {\paren {f * g} * h} } n\)

\(=\)







\(\ds \sum_{a b \mathop = n} \map {\paren {f * g} } a \map h b\)




















\(\ds \)

\(=\)







\(\ds \sum_{a b \mathop = n} \ \sum_{c d \mathop = a} \map f c \map g d \map h b\)




















\(\ds \)

\(=\)







\(\ds \sum_{b c d \mathop = n} \map f c \map g d \map h b\)









and














\(\ds \map {\paren {f * \paren {g * h} } } n\)

\(=\)







\(\ds \sum_{a b \mathop = n} \map f a \map {\paren {g * h} } b\)




















\(\ds \)

\(=\)







\(\ds \sum_{a b \mathop = n} \map f a \sum_{c d \mathop = b} \map g c \map h d\)




















\(\ds \)

\(=\)







\(\ds \sum_{a c d \mathop = n} \map f a \map g c \map h d\)









and associativity follows.
$\blacksquare$


Also see
Properties of Dirichlet Convolution




