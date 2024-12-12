# 

Source: https://proofwiki.org/wiki/Direct_Sum_of_Identity_Operators_on_Hilbert_Spaces_is_Identity_Operator

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ be a $I$-indexed family of Hilbert spaces over $\GF$.
For each $i \in I$, let $I_{\map B {\HH_i} } : \HH_i \to \HH_i$ be the identity mapping.
Let:

$\ds \HH = \bigoplus_{i \mathop \in I} \HH_i$
be the Hilbert space direct sum of $\sequence {\family {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ with norm $\norm {\, \cdot \,}_\HH$.
Let $I_{\map B \HH} : \HH \to \HH$ be the identity mapping.

Then:

$\ds I_{\map B \HH} = \bigoplus_{i \mathop \in I} I_{\map B {\HH_i} }$
where $\ds \bigoplus_{i \mathop \in I} I_{\map B {\HH_i} }$ is the direct sum of $\family {I_{\map B {\HH_i} } }_{i \mathop \in I}$. 


Proof
Let $f \in \HH$. 
Then we have, for each $i \in I$:

$\ds \map {\paren {\bigoplus_{i \mathop \in I} I_{\map B {\HH_i} } f} } i = I_{\map B {\HH_i} } \map f i = \map f i$
Hence: 

$\ds \bigoplus_{i \mathop \in I} I_{\map B {\HH_i} } f = f = I_{\map B \HH} f$
for each $f \in \HH$.
Hence the result.
$\blacksquare$





