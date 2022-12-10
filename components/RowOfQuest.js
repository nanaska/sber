export default function RowOfQuest({title, description}){
    return(<>

        <div className="flex items-center justify-center p-2">
           <span className="text-black">{title}</span>
            {description}
        </div>

    </>)
}