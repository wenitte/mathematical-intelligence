The formal proof provided is structured around concepts and relationships in category theory. Here's an explanation in natural language:

The definition of an epimorphism ('epi') in category theory says that for a given morphism 'e' from an object 'a' to another object 'b', we consider it "epi" if for all objects 'x' in the category, and for every morphism 'f' and 'g' from 'b' to 'x', if the composition 'f' after 'e' equals the composition 'g' after 'e', then 'f' must equal 'g'. This basically says that an "epi" is a property of a morphism where the endpoint can't distinguish between two different paths getting to it.

Next, there is a statement about canceling out morphisms from equations. If a morphism 'e' from 'a' to 'b' is "epi," then for every pair of morphisms 'f' and 'g' from 'b' to some 'x', if the composition of 'f' following 'e' is equal to the composition of 'g' following 'e', then 'f' must be equal to 'g'. Essentially, this is a re-statement of the definition of "epi" but highlighting the ability to "cancel" the 'e' from both sides of an equality.

The third statement establishes that the composition of two "epis" is itself an "epi". If we have two morphisms - 'e₁' from 'a' to 'b', and 'e₂' from 'b' to 'c', - and both are "epi," then the composition 'e₂' after 'e₁' is also "epi".

Finally, it is asserted that if a morphism is an isomorphism ('iso'), then it is also "epi". This is proven by taking a morphism 'f' from 'a' to 'b', and assuming that it has an inverse 'f⁻¹'. Then if we have two morphisms 'g₁' and 'g₂' composed with 'f' and they are equal, composing both sides of the equation by 'f⁻¹' shows that 'g₁' must be equal to 'g₂'. Hence, an "iso" (which has a two-way operation) is necessarily "epi" (a one-way operation). 

Basically, this proof shows some of the relationships between different kinds of morphisms in category theory - particularly the epimorphisms and isomorphisms.